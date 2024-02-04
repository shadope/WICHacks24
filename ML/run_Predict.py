import pickle
import numpy as np

def load_model(file_path):
    # Load the saved model
    loaded_model = pickle.load(open(file_path, 'rb'))
    return loaded_model

def make_predictions(model, input_array):
    # Convert the input array to a NumPy array
    input_array = np.array(input_array).reshape(1, -1)

    # Make predictions
    predictions = model.predict(input_array)
    return predictions

if __name__ == "__main__":
    # Replace 'final.sav' with the actual file path of your saved model
    model_file_path = 'finalized_model.sav'

    # Load the model
    loaded_model = load_model(model_file_path)

    # Replace 'input_array' with your actual input array for prediction
    input_array = np.array([1, 2, 3]).reshape(1, -1)

    # Make predictions on the input array
    predictions = make_predictions(loaded_model, input_array)

    # Display the predictions
    print("Predictions:", predictions)
