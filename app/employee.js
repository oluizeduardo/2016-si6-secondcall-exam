"use strict"

const express = require('express');
const router = express.Router();
const employeeDB = require('./employeeDB.json');

function findEmployee(employeeId) {
    
    var findedEmployee = employeeDB.find(employee => employee.id === employeeId);
    
    /*console.log(findedEmployee.id);
    console.log(findedEmployee.name);
    console.log(findedEmployee.email);
    console.log(findedEmployee.jobTitle);
    console.log(findedEmployee.dateOfBirth);*/
    
    return findedEmployee;
}



function calculateAge(employee) {
    
    var birth = ''+employee.dateOfBirth
    var year = birth.split('/')
    
    var d = new Date,
        year_current = d.getFullYear(),
        month_current = d.getMonth(),
        day_current = d.getDate(),

        year_birth = year[0],
        month_birth = year[1],
        day_birth = year[2],

        age_current = year_current - year_birth;

    if (month_current < month_birth || month_current == month_birth && day_current < day_birth) {
        return age_current--
    }
    return age_current
}



router.get('/', function (req, res) {
        res.json(employeeDB)
        
    }).get('/:id', function (req, res) {
        let requestId = request.params.id
        let findedEmployee = findEmployee(requestId)
        
        if(findedEmployee){

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
//calculateAge(findEmployee('001'));