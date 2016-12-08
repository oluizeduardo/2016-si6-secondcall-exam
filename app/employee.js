"use strict"

const express = require('express');
const router = express.Router();
const employeeDB = require('./employeeDB.json');

function findEmployee(employeeId) {
    
    return employeeDB.find(employee => employee.id === employeeId);
}



function calculateAge(employee) {
    
    var birth = ''+employee.dateOfBirth
    var year = birth.split('/')
    
    return new Date().getFullYear() - year[0];
}



router.get('/', function (req, res) {
        res.json(employeeDB)
        
    }).get('/:id', function (req, res) {
        let requestId = request.params.id
        let findedEmployee = findEmployee(requestId)
        
        if(findedEmployee){
            
            console.log(findedEmployee.id);
            console.log(findedEmployee.name);
            console.log(findedEmployee.email);
            console.log(findedEmployee.jobTitle);
            console.log(findedEmployee.dateOfBirth);
            
            
            console.log('Encontrado! Calculando idade..');
            
            var age =  calculateAge(findedEmployee); 
            res.json(findedStudent)
            
        } else {
            response.status(404)
            res.json({error: 'Não encontrado!!'})
        }
    })


module.exports = router


// Teste..
calculateAge(findEmployee('001'));