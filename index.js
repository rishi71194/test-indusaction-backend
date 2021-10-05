const express = require('express');

const app = express();  

app.use(express.json());  

app.use(express.json());

const children = [
        {
            "_id": "60fd30144ad3995f4cd47b10",
            "name": "Ram Kumar",
            "sex": "Male",
            "dob": "2011-06-15",
            "father_name": "Rajesh Kumar",
            "mother_name": "Rajni",
            "district_id": "60fd1f1683fe721470a5da82",
            "photo": "'https://prework-backend.s3.ap-south-1.amazonaws.com/child1.jpeg'"
        },
        {
            "_id": "60fd30464ad3995f4cd47b12",
            "name": "Rajesh Khanna",
            "sex": "Male",
            "dob": "2010-06-15",
            "father_name": "prayag Khanna",
            "mother_name": "niharika Khanna",
            "district_id": "60fd1f1683fe721470a5da82",
            "photo": "'https://prework-backend.s3.ap-south-1.amazonaws.com/child2.jpeg'"
        },
        {
            "_id": "6111005e4ad3995f4cd47b19",
            "name": "Rajesh Khanna",
            "sex": "Male",
            "dob": "2010-06-15",
            "father_name": "prayag Khanna",
            "mother_name": "niharika Khanna",
            "district_id": "60fd1f1683fe721470a5da82",
            "photo": "https://prework-backend.s3.ap-south-1.amazonaws.com/child2.jpeg"
        },
        {
            "_id": "61111e534ad3995f4cd47b62",
            "name": "jkdjkjk",
            "sex": "Male",
            "dob": "2000-01-01",
            "father_name": "jfkhkjk",
            "mother_name": "kjfkhjk",
            "district_id": "79",
            "photo": ""
        },
        {
            "_id": "611164484ad3995f4cd47b80",
            "name": "jhjkhkjh",
            "sex": "Male",
            "dob": "2000-01-01",
            "father_name": "jkhkjhkj",
            "mother_name": "klhkjhgj",
            "district_id": "789",
            "photo": ""
        },
        {
            "_id": "6111836d4ad3995f4cd47bf0",
            "name": "Prashant Pandey",
            "sex": "Male",
            "dob": "2000-02-01",
            "father_name": "Mr. Jai Prakash Pandey",
            "mother_name": "Rama Rani Pandey",
            "district_id": "12",
            "photo": ""
        },
        {
            "_id": "611183b14ad3995f4cd47bf2",
            "name": "test",
            "sex": "Male",
            "dob": "2000-02-01",
            "father_name": "test",
            "mother_name": "tesr",
            "district_id": "123",
            "photo": ""
        },
        {
            "_id": "611183bd4ad3995f4cd47bf4",
            "name": "test",
            "sex": "Male",
            "dob": "2000-02-01",
            "father_name": "test",
            "mother_name": "tesr",
            "district_id": "123",
            "photo": ""
        },
        {
            "_id": "611183e84ad3995f4cd47bf6",
            "name": "test",
            "sex": "Male",
            "dob": "2000-02-01",
            "father_name": "test",
            "mother_name": "test",
            "district_id": "1234",
            "photo": ""
        },
        {
            "_id": "6115574a4ad3995f4cd47c45",
            "name": "jhg",
            "sex": "Male",
            "dob": "5555-05-05",
            "father_name": "hguh",
            "mother_name": "ghjgh",
            "district_id": "8",
            "photo": ""
        },
        {
            "_id": "615c8eec4ad3995f4cd47d4e",
            "name": "Rajesh Khanna",
            "sex": "Male",
            "dob": "2010-06-15",
            "father_name": "prayag Khanna",
            "mother_name": "niharika Khanna",
            "district_id": "60fd1f1683fe721470a5da82",
            "photo": "https://prework-backend.s3.ap-south-1.amazonaws.com/child2.jpeg"
        }
    ];

const states = [
        {
            "_id": "60fd2bba397ead0a8472c104",
            "state_name": "Delhi",
            "state_id": "1"
        },
        {
            "_id": "60fd2fde4ad3995f4cd47b04",
            "state_name": "Rajasthan",
            "state_id": "2"
        },
        {
            "_id": "611111954ad3995f4cd47b3f",
            "state_name": "Gujgrat",
            "state_id": "5"
        },
        {
            "_id": "611555b04ad3995f4cd47c33",
            "state_name": "Gujrat",
            "state_id": "6"
        },
        {
            "_id": "611562074ad3995f4cd47c72",
            "state_name": "Uttar Pradesh",
            "state_id": "7"
        },
        {
            "_id": "6115628d4ad3995f4cd47c7d",
            "state_name": "Bihar",
            "state_id": "8"
        },
        {
            "_id": "6116a3364ad3995f4cd47ccc",
            "state_name": "Chennai",
            "state_id": "9"
        },
        {
            "_id": "61177a934ad3995f4cd47cf1",
            "state_name": "Goa",
            "state_id": "10"
        },
        {
            "_id": "611e433a4ad3995f4cd47d0e",
            "state_name": "j & K",
            "state_id": "12"
        },
        {
            "_id": "611e5bf44ad3995f4cd47d40",
            "state_name": "UP",
            "state_id": "14"
        }
    ];

const districts = [
        {
            "_id": "60fd30054ad3995f4cd47b0d",
            "district_name": "Rohini",
            "state_id": "1"
        },
        {
            "_id": "6111114f4ad3995f4cd47b36",
            "district_name": "Rohini",
            "state_id": "1"
        },
        {
            "_id": "61155f9d4ad3995f4cd47c5a",
            "district_name": "Rohini",
            "state_id": "1"
        },
        {
            "_id": "611561524ad3995f4cd47c67",
            "district_name": "Rohini",
            "state_id": "1"
        },
        {
            "_id": "611561614ad3995f4cd47c6a",
            "district_name": "Rohini",
            "state_id": "1"
        },
        {
            "_id": "611e55ac4ad3995f4cd47d24",
            "district_name": "Lajpat Nagar",
            "state_id": "1"
        },
        {
            "_id": "611e5c0e4ad3995f4cd47d45",
            "district_name": "harinagar",
            "state_id": "1"
        }
    ];

app.get('/', (req, res) => {
        res.send('index.html');
});

app.get('/api/children', (req, res)=>{
        res.send(children);
});

app.get('/api/children/:id', (req, res)=>{
        const child = children.find(i => i._id === req.params.id);
        if(!child) res.status(404).send("There is no child with that id.")
        res.send(child);
});

app.post('/api/child', (req, res)=>{
        const child = {
                _id: children.length+1,
                name: req.body.name,
                sex: req.body.sex,
                dob: req.body.dob,
                father_name: req.body.fname,
                mother_name: req.body.mname,
                district_id: req.body.did,
                photo: req.body.picurl
        };
        states.push(child);
        res.send(child);
});

app.get('/api/states', (req, res)=>{
        res.send(states);
});


app.get('/api/states/:id', (req, res)=>{
       const state = states.find(i => i.state_id === req.params.id);
       if(!state) res.status(404).send("There is no state with that id.")
       res.send(state);
});

app.post('/api/state', (req, res)=>{
        const state = {
                _id: states.length + 1,
                state_id: req.body.state_id,
                state_name: req.body.state_name,
        };
        states.push(state);
        res.send(state);
});


app.get('/api/districts/state_id=:id', (req, res)=>{
        const district = districts.find(i => i.state_id === req.params.id);
       if(!district) res.status(404).send("There is no disctrict with that state id.")
        res.send(district);
});

app.post('/api/district', (req, res)=>{
        const district = {
                _id: districts.length + 1,
                state_id: req.body.state_id,
                district_name: req.body.district_name,
        };
        states.push(district);
        res.send(district);
});

app.listen(3000, ()=>console.log('Listening on port 3000'));