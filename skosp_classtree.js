var tree={
  "plugins": [
    "defaults",
    "search",
    "sort",
    "state",
    "types",
    "contextmenu"
  ],
  "search": {
    "show_only_matches": true
  },
  "types": {
    "class": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/class.png"
    },
    "geoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoclass.png"
    },
    "halfgeoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/halfgeoclass.png"
    },
    "collectionclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/collectionclass.png"
    },
    "geocollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geometrycollection.png"
    },
    "featurecollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/featurecollection.png"
    },
    "instance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/instance.png"
    },
    "geoinstance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoinstance.png"
    }
  },
  "core": {
    "themes": {
      "responsive": true
    },
    "check_callback": true,
    "data": [
      {
        "id": "http://ontology.skosplus.net/Ontology_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Ontology Instances Collection (:Ontology_collection)",
        "data": {}
      },
      {
        "id": "http://ontology.skosplus.net/ObjectProperty_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "ObjectProperty Instances Collection (:ObjectProperty_collection)",
        "data": {}
      },
      {
        "id": "http://ontology.skosplus.net/Class_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Class Instances Collection (:Class_collection)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#Collection",
        "parent": "http://ontology.skosplus.net/Collection",
        "type": "collectionclass",
        "text": "Collection (skos:Collection) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Ontology": 1
            }
          },
          "from": {}
        },
        "instancecount": 3
      },
      {
        "id": "http://ontology.skosplus.net/Collection",
        "parent": "#",
        "type": "class",
        "text": "Collection (:Collection)",
        "data": {}
      },
      {
        "id": "http://ontology.skosplus.net/Concept",
        "parent": "#",
        "type": "class",
        "text": "Concept (:Concept)",
        "data": {}
      },
      {
        "id": "http://ontology.skosplus.net/ConceptScheme",
        "parent": "#",
        "type": "class",
        "text": "ConceptScheme (:ConceptScheme)",
        "data": {}
      }
    ]
  }
}