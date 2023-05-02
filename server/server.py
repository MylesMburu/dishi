from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

RECIPE_PUPPY_API_URL = "http://www.recipepuppy.com/api/"


@app.route('/api/search', methods=['GET'])
def search_recipes():
    query = request.args.get('q', '')
    response = requests.get(RECIPE_PUPPY_API_URL, params={'q': query})
    if response.status_code == 200:
        data = response.json()
        recipes = [
            {
                "strMeal": recipe["title"].strip(),
                "strMealThumb": recipe["thumbnail"],
                "strInstructions": recipe["href"]
            } for recipe in data["results"]
        ]
        return jsonify(recipes)
    else:
        return jsonify({"error": "Failed to fetch data from Recipe Puppy API"}), 500


if __name__ == '__main__':
    app.run(debug=True)
