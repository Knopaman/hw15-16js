    var human = {
        name: "Roma",
        age: 28,
        increase: 180,
        sex: "man",
        weight: 90
    };


    var worker = {
        placeOfWork: "IT",
        salary: "20000",
        work: function(){
            alert('WORKING.....')
        }
    };
    worker.__proto__= human;
    console.log(worker);

    var student = {
        placeOfStudy: "DNU",
        scholarship: "20000",
        study: function(){
            alert('STUDY.....')
        }
    };


    student.__proto__ = human;
    console.log(student);
