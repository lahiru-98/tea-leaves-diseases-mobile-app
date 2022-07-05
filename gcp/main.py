from google.cloud import storage
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import tensorflow as tf
import tensorflow_hub as hub

from PIL import Image , ImageOps
import numpy as np


model = None
interpreter = None
input_index = None
output_index = None

#class_names = ["Early Blight", "Late Blight", "Healthy"]
class_names = ['Anthracnose', 'algal leaf', 'bird eye spot', 'brown blight',
       'gray light', 'healthy', 'red leaf spot', 'white spot']

BUCKET_NAME = "tea-leaf-bucket" # Here you need to put the name of your GCP bucket
MODAL_NAME = "tea_leaf_model_75.h5"


def download_blob(bucket_name, source_blob_name, destination_file_name):
    """Downloads a blob from the bucket."""
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(source_blob_name)

    blob.download_to_filename(destination_file_name)

    print(f"Blob {source_blob_name} downloaded to {destination_file_name}.")


def predict_disease(request):
    global model
    if model is None:
        download_blob(
            BUCKET_NAME,
            "models/"+MODAL_NAME,
            "/tmp/"+MODAL_NAME,
        )
        model = tf.keras.models.load_model("/tmp/"+MODAL_NAME , custom_objects={'KerasLayer':hub.KerasLayer})

    image = request.files["file"]
    image_ready = np.array(
        Image.open(image).convert("RGB").resize((224, 224)) # image resizing
    )
    image_ready = image_ready/255 # normalize the image in 0 to 1 range
    img_array = tf.expand_dims(image_ready, 0)
    
    predictions = model.predict(img_array)
    class_index = np.argmax(predictions[0])
    preediction_confidence = round(100 * (np.max(predictions[0])), 2)

    class_str = str(class_index)
    confidence_str = str(preediction_confidence)

    return {"class": class_str , "confidence": confidence_str }