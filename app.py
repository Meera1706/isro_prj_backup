import streamlit as st
import tensorflow as tf
import numpy as np
from PIL import Image

# Load trained model
model = tf.keras.models.load_model("soil_classifier.h5")

# Class labels (order must match training)
class_names = [
    "Black Soil",
    "Cinder Soil",
    "Laterite Soil",
    "Peat Soil",
    "Yellow Soil"
]

# Crop recommendations with reasons
crop_recommendations = {
    "Black Soil": {
        "crops": ["Cotton", "Soybean", "Wheat"],
        "reason": "Black soil has high moisture retention and is rich in clay, making it ideal for deep-rooted crops."
    },
    "Cinder Soil": {
        "crops": ["Potato", "Carrot", "Onion"],
        "reason": "Cinder soil is porous and well-drained, suitable for root vegetables."
    },
    "Laterite Soil": {
        "crops": ["Tea", "Coffee", "Cashew"],
        "reason": "Laterite soil is acidic and rich in iron, suitable for plantation crops."
    },
    "Peat Soil": {
        "crops": ["Rice", "Sugarcane"],
        "reason": "Peat soil is rich in organic matter and retains moisture, ideal for water-loving crops."
    },
    "Yellow Soil": {
        "crops": ["Groundnut", "Maize", "Pulses"],
        "reason": "Yellow soil has moderate fertility and supports a wide variety of crops with proper irrigation."
    }
}

st.title("🌱 Soil Type Detection & Crop Advisory System")

uploaded_file = st.file_uploader(
    "Upload a soil image",
    type=["jpg", "jpeg", "png"]
)

if uploaded_file is not None:
    image = Image.open(uploaded_file).convert("RGB")

    st.image(
        image,
        caption="Uploaded Soil Image",
        use_container_width=True
    )

    # Preprocessing
    img = image.resize((224, 224))
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    # Prediction
    prediction = model.predict(img_array)
    predicted_index = np.argmax(prediction)
    soil_type = class_names[predicted_index]

    st.success(f"🧪 Predicted Soil Type: **{soil_type}**")

    # Crop advisory
    advisory = crop_recommendations[soil_type]

    st.subheader("🌾 Suitable Crops")
    for crop in advisory["crops"]:
        st.write(f"- {crop}")

    st.subheader("📌 Reason")
    st.write(advisory["reason"])