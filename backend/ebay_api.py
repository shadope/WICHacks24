import requests
import json

#getting all of the jackets first 
categories = {"jackets":{},"jeans":{},"pants":{},"sweatshirt":{},"shorts":{},"shirt":{},"dress":{}}
brands = ["New Balance","Under Armour","Nike","Adidas","Reebok","Puma"]
jackets= {brands[0]:[], brands[1]:[], brands[2]:[], brands[3]:[],brands[4]:[],brands[5]:[]}
jeans= {brands[0]:[], brands[1]:[], brands[2]:[], brands[3]:[],brands[4]:[],brands[5]:[]}
pants= {brands[0]:[], brands[1]:[], brands[2]:[], brands[3]:[],brands[4]:[],brands[5]:[]}
sweatshirt= {brands[0]:[], brands[1]:[], brands[2]:[], brands[3]:[],brands[4]:[],brands[5]:[]}
shorts= {brands[0]:[], brands[1]:[], brands[2]:[], brands[3]:[],brands[4]:[],brands[5]:[]}
shirt= {brands[0]:[], brands[1]:[], brands[2]:[], brands[3]:[],brands[4]:[],brands[5]:[]}
dress= {brands[0]:[], brands[1]:[], brands[2]:[], brands[3]:[],brands[4]:[],brands[5]:[]}


json_file_path = "./NBJackets.json"
querystring = {"page":"1",}

headers = {
	"X-RapidAPI-Key": "7c363c8772msh1e2e0311103c993p12ce6ajsn731c5191d610",
	"X-RapidAPI-Host": "ebay32.p.rapidapi.com"
}

#jacket seacrhing 

#looping through each brands jacket
for brand in brands:
   
    url = "https://ebay32.p.rapidapi.com/search/"+brand+" jacket"
    response = requests.get(url, headers=headers, params=querystring)

    if response.status_code == 200:
        response_data = response.json()

        #loop through all of the brands jackets
        for NBjacket in response_data["products"]:
            # metadat for each jacket
            instance_template = {
                "Title":"",
                "Price":"",
                "Image":""
            }

            title = NBjacket["title"]
            image = NBjacket["thumbnail"]
            price = NBjacket["price"]["value"]

            instance_template["Image"]=image
            instance_template["Price"]=price
            instance_template["Title"]=title

            jackets[brand].append(instance_template)

categories["jackets"] = jackets

#Jeans

for brand in brands:
   
    url = "https://ebay32.p.rapidapi.com/search/"+brand+" jeans"
    response = requests.get(url, headers=headers, params=querystring)

    if response.status_code == 200:
        response_data = response.json()

        #loop through all of the brands jackets
        for NBjacket in response_data["products"]:
            instance_template = {
                "Title":"",
                "Price":"",
                "Image":""
            }

            title = NBjacket["title"]
            image = NBjacket["thumbnail"]
            price = NBjacket["price"]["value"]

            instance_template["Image"]=image
            instance_template["Price"]=price
            instance_template["Title"]=title

            jeans[brand].append(instance_template)

categories["jeans"] = jeans

#pants

for brand in brands:
   
    url = "https://ebay32.p.rapidapi.com/search/"+brand+" pants"
    response = requests.get(url, headers=headers, params=querystring)

    if response.status_code == 200:
        response_data = response.json()

        #loop through all of the brands jackets
        for NBjacket in response_data["products"]:
            instance_template = {
                "Title":"",
                "Price":"",
                "Image":""
            }

            title = NBjacket["title"]
            image = NBjacket["thumbnail"]
            price = NBjacket["price"]["value"]

            instance_template["Image"]=image
            instance_template["Price"]=price
            instance_template["Title"]=title

            pants[brand].append(instance_template)

categories["pants"] = pants


#sweatshirts

for brand in brands:
   
    url = "https://ebay32.p.rapidapi.com/search/"+brand+" sweatshirt"
    response = requests.get(url, headers=headers, params=querystring)

    if response.status_code == 200:
        response_data = response.json()

        #loop through all of the brands jackets
        for NBjacket in response_data["products"]:
            instance_template = {
                "Title":"",
                "Price":"",
                "Image":""
            }

            title = NBjacket["title"]
            image = NBjacket["thumbnail"]
            price = NBjacket["price"]["value"]

            instance_template["Image"]=image
            instance_template["Price"]=price
            instance_template["Title"]=title

            sweatshirt[brand].append(instance_template)

categories["sweatshirt"] = sweatshirt

#shorts


for brand in brands:
   
    url = "https://ebay32.p.rapidapi.com/search/"+brand+" shorts"
    response = requests.get(url, headers=headers, params=querystring)

    if response.status_code == 200:
        response_data = response.json()

        #loop through all of the brands jackets
        for NBjacket in response_data["products"]:
            instance_template = {
                "Title":"",
                "Price":"",
                "Image":""
            }

            title = NBjacket["title"]
            image = NBjacket["thumbnail"]
            price = NBjacket["price"]["value"]

            instance_template["Image"]=image
            instance_template["Price"]=price
            instance_template["Title"]=title

            shorts[brand].append(instance_template)

categories["shorts"] = shorts


#shirt

for brand in brands:
   
    url = "https://ebay32.p.rapidapi.com/search/"+brand+" shirt"
    response = requests.get(url, headers=headers, params=querystring)

    if response.status_code == 200:
        response_data = response.json()

        #loop through all of the brands jackets
        for NBjacket in response_data["products"]:
            instance_template = {
                "Title":"",
                "Price":"",
                "Image":""
            }

            title = NBjacket["title"]
            image = NBjacket["thumbnail"]
            price = NBjacket["price"]["value"]

            instance_template["Image"]=image
            instance_template["Price"]=price
            instance_template["Title"]=title

            shirt[brand].append(instance_template)

categories["shirt"] = shirt


#dress


for brand in brands:
   
    url = "https://ebay32.p.rapidapi.com/search/"+brand+" jacket"
    response = requests.get(url, headers=headers, params=querystring)

    if response.status_code == 200:
        response_data = response.json()

        #loop through all of the brands jackets
        for NBjacket in response_data["products"]:
            instance_template = {
                "Title":"",
                "Price":"",
                "Image":""
            }

            title = NBjacket["title"]
            image = NBjacket["thumbnail"]
            price = NBjacket["price"]["value"]

            instance_template["Image"]=image
            instance_template["Price"]=price
            instance_template["Title"]=title

            dress[brand].append(instance_template)

categories["dress"] = dress

    

with open(json_file_path, "w") as json_file:
  json.dump(categories, json_file, indent=2)
