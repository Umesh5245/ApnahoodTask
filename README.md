# ApnahoodTask

#post
http://localhost:3000/api/auth/register  

exapmle json input
{
    "name":"umesh",
    "type":"seller",
    "email":"abcd11@gmail.com",
    "phone":"9378945555",
    "password":"hello"
}

#post
http://localhost:3000/api/auth/login  

exapmle json input
{
    "email":"abcd11@gmail.com", 
    "password":"hello"
}


#post
http://localhost:3000/api/seller/create-catalog  

exapmle json input
{
    
 "selleremail": "abc1d@gmail.com",
"sellername":"aaaa",
     "price": [
        2,
        3,
        4
    ],
     "product": [
        "pen",
        "pencil",
        "car"
    ]
}


#get
http://localhost:3000/api/buyer/list-of-sellers 


#get
http://localhost:3000/api/buyer/seller-catalog  

exapmle json input
{
    "selleremail": "abc1d@gmail.com"
    
}


#post
http://localhost:3000/api/buyer/create-order

exapmle json input
{
    "seller_id":"abcd111111@gmail.com",
    "sellername":"abcd",
    "username":"ada",
    "useremail":"da@gmial.oc",
    "product": [
        "task",
        "other",
        "thing"
    ],
     "price": [
        2,
        3,
        4
    ],
     "quantity": [
        5,
        6,
        7
    ]
}


#get
http://localhost:3000/api/seller/orders 

exapmle json input
{
  "seller_id":"abcd1@gmail.com"
}








