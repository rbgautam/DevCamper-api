import json
import os
def transform_recipe():
    json_file = 'response-data.json'
    with open(json_file) as json_data:
        data = json.load(json_data)
    # print(type(data))
    jsonlist =[]
    for k1, v1 in data.items():
        
        if k1 == 'data':
            for item in v1:
                itemdict = {}
                for key, val in item.items():
                    print('key=',key,'val=',val)
                    if key == 'title':
                        val = val.replace(' - Cookpad','')
                    if key == 'ingredients_list':
                        ing_list =[]
                        for ingredient in item['ingredients_list']:
                            ing_list.append(ingredient['name'])
                        ing_str = ",".join(ing_list)
                        itemdict.update({'ingredient_name_string':ing_str})
                    itemdict.update({key:val})
                jsonlist.append(itemdict)
    output_folder = 'raw'
    output_file_name = 'Recipe_Data'+'.json'
    output_file_path = os.path.join(output_folder,output_file_name)
    with open(output_file_path, 'w', encoding='utf8') as json_file:
        json.dump(jsonlist, json_file, ensure_ascii=False) 
    # for item in data['data']:
    #     for ingredient in item['ingredients_list']:
    #         print(ingredient['name'])

transform_recipe()