using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using LMS_Team5.Model;
using LMS_Team5.Repository;
using LMS_Team5.DataAccessLayer;

namespace LMS_Team5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CRUDController : ControllerBase
    {
        //DataAccessLayerDB dataAccessLayerDB;
        private readonly IEmployeeRepo employeeRepo;
      
        public CRUDController(IEmployeeRepo employeeRepo)
        {
            this.employeeRepo = employeeRepo;
            
        }

        //(SWAGGER ONLY) This is to show all employees
        [HttpGet]
        [Route("DisplayAll")]
        public async Task<IActionResult> GetEmp()
        {
            var ar = await employeeRepo.GetEmployeesAsync();
            return Ok(ar);
        }

        //(SWAGGER ONLY) With this we can search any employee with his/her emp_id
        [HttpGet]
        [Route("SearchById")]
        public async Task<IActionResult> Search(int id)
        {
            var ar = await employeeRepo.GetEmpByIdAsync(id);
            return Ok(ar);
        }

        //(SWAGGER ONLY) This is used to delete record from emp table
        [HttpDelete]
        [Route("DeleteEmp")]
        public async Task<IActionResult> DeleteEmployee(int? id)
        {
            if (id != null)
            {
                await employeeRepo.DeleteEmpAsync(id);
                return Ok();
            }
            return NotFound();
        }

        //(SWAGGER ONLY) This is to update emptable
        [HttpPut]
        [Route("UpdateEmp/{id?}")]
        public async Task<IActionResult> UpdateEmployee(int? id, Employee employee)
        {
            if (id != null)
            {
                await employeeRepo.UpdateEmpAsync(id, employee);
                return Ok();
            }
            return NotFound();
        }

        //With this new employee can register
        [HttpPost]
        [Route("InsertEmp")]
        public async Task<IActionResult> EmpSignUp(Employee employee)
        {
            var ar = await employeeRepo.EmpSignUpAsync(employee);
            return Ok(ar);
        }

        //With this Employee can Login
        [HttpGet]
        [Route("EmpLogin/{Emp_Email}/{Password}")]
        public async Task<int> Emp_Login(string Emp_Email, string Password)
        {
            var lg = await employeeRepo.LoginAsync( Emp_Email, Password);
            if (lg == 0)
                return 0;
            else
                return 1;
        }

        //With this Manager can Login
        [HttpGet]
        [Route("ManLogin/{Man_Id}/{Password}")]
        public async Task<int> ManagerLogin(int Man_Id, string Password)
        {
            var lg = await employeeRepo.ManagerLoginAsync(Man_Id, Password);
            if (lg == 0)
                return 0;
            else
                return 1;
        }

        //With this we get any employee details on UI using Email Id 
        [HttpGet]
        [Route("MyDetails/{Emp_Email}")]
        public async Task<IActionResult> MyDetails(string Emp_Email)
        {
            var ar = await employeeRepo.MyDetailsAsync(Emp_Email);
            return Ok(ar);
        }

        //With this Logged in employee can his manager details
        [HttpGet]
        [Route("MyManagerDetails/{Man_Id}")]
        public async Task<IActionResult> MyManager(int? Man_Id)
        {
            var mk = await employeeRepo.MyManagerAsync(Man_Id);
            return Ok(mk);
        }

        //With the help to this employees can apply leave
        [HttpPost]
        [Route("InsertLeave")]
        public async Task<IActionResult> ApplyLeave(LeaveDetails leaveDetails)
        {
            var ar = await employeeRepo.InsertLeaveAsync(leaveDetails);
            return Ok(ar);
        }

        //This is to show all employee's previous Leaves
        [HttpGet]
        [Route("MyPreviousLeaves/{Emp_Id}")]
        public async Task<IActionResult> MyPreviousLeaves(int Emp_Id)
        {
            var ar = await employeeRepo.MyPreviousLeaves(Emp_Id);
            return Ok(ar);
        }

        //This is to show all Leaves under specific manager 
        [HttpGet]
        [Route("AppliedLeaves/{Man_Id}")]
        public async Task<IActionResult> AppliedLeaves(int Man_Id)
        {
            var ar = await employeeRepo.AppliedLeaves(Man_Id);
            return Ok(ar);
        }

        //this method is used to change leave status and add manager comment
        [HttpPatch]
        [Route("ApproveDeny/{id}")]
        public int ApproveDeny(int? id, LeaveDetails leaveDetails)
        {
            var data = employeeRepo.ManagerAction(id, leaveDetails);
            return 1;
        }
    }

}
