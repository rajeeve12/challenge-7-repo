//Task 1
const company = {

    departments: [
    
     {
    
     departmentName: 'Engineering',
    
     employees: [
    
                   {
    
                        name: 'Alice',
    
                      salary: 100000,
    
                       subordinates: [
    
                         {
    
                             name: 'Bob',
    
                               salary: 80000,
    
                              subordinates: [
    
                               {
    
                                        name: 'Charlie',
    
                                     salary: 60000,
    
                          subordinates: []
    
                               }
    
                             ]
    
                        }
    
                    ]
    
                },
    
            {
    
       name: 'David',
    
     salary: 90000,
    
     subordinates: []
    
           }
    
          ]
    
         },
    
       {
    
       departmentName: 'Sales',
    
           employees: [
    
           {
    
         name: 'Eve',
    
        salary: 85000,
    
             subordinates: [
    
                        {
    
                            name: 'Frank',
    
                             salary: 70000,
    
                           subordinates: []
    
         }
    
               ]
    
           },
    {
     name: 'Grace',
    salary: 95000,
     subordinates: []
     }  
    ]  
    }   
    ]
    };

//Task 2
function calculateDepartmentSalary(departmentName) {
    let totalDepartmentSalary = employee.salary;
    for(let subordinate of employee.subordinates) {
        totalDepartmentSalary += calculateDepartmentSalary(subordinate);
    }
    return totalDepartmentSalary;
};
    const totalEngineeringSalary = calculateDepartmentSalary("Engineering");
    const totalSalesSalary = calculateDepartmentSalary("Sales");

    console.log(totalEngineeringSalary);
    console.log(totalSalesSalary);

//Task 3
function calculateCompanySalary(companyName) {
    let CompanySalary = totalEngineerSalary + totalSalesSalary;
    return CompanySalary;
}
    