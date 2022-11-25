using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using LMS_Team5.Model;
using LMS_Team5.DataAccessLayer;

namespace LMS_Team5.Repository
{
    public class EmployeeRepo : IEmployeeRepo
    {
        private readonly DataAccessLayerDB dataAccessLayerDB;
        private readonly IMapper mapper;

        public EmployeeRepo(DataAccessLayerDB dataAccessLayerDB, IMapper mapper)
        {
            this.dataAccessLayerDB = dataAccessLayerDB;
            this.mapper = mapper;
        }

        //(SWAGGER ONLY) This method is used to get all employee from employee table
        public async Task<List<Employee>> GetEmployeesAsync()
        {
            var empDetails = await dataAccessLayerDB.employees.ToListAsync();
            var data = mapper.Map<List<Employee>>(empDetails);
            return data;
        }

        //(SWAGGER ONLY) This method is used to search any employee with his/her emp_id from employee table
        public async Task<Employee> GetEmpByIdAsync(int id)
        {
            var ar = await dataAccessLayerDB.employees.Where(x => x.Emp_Id == id).FirstOrDefaultAsync();
            var w = mapper.Map<Employee>(ar);
            return w;
        }

        //(SWAGGER ONLY) This method is used to delete any one employee from employee table
        public async Task DeleteEmpAsync(int? id)
        {
            var ar = dataAccessLayerDB.employees.FirstOrDefault(x => x.Emp_Id == id);
            if (ar != null)
            {
                dataAccessLayerDB.employees.Remove(ar);
            }
            await dataAccessLayerDB.SaveChangesAsync();
        }

        //(SWAGGER ONLY) This method is used to update any employee details from employee table
        public async Task UpdateEmpAsync(int? id, Employee employee)
        {
            var ar = dataAccessLayerDB.employees.FirstOrDefault(x => x.Emp_Id == id);
            if (ar != null)
            {
                ar.Emp_Name = employee.Emp_Name;
                ar.Emp_Email = employee.Emp_Email;
                ar.Emp_Dept = employee.Emp_Dept;
                ar.Emp_Doj = employee.Emp_Doj;
                ar.Emp_Phone = employee.Emp_Phone;
                ar.Emp_LeaveBal = employee.Emp_LeaveBal;
                await dataAccessLayerDB.SaveChangesAsync();
            }
        }

        //This method is used for Login of Employee
        public async Task<int> LoginAsync(string Emp_Email, string Password)
        {
            var data = await dataAccessLayerDB.employees.FirstOrDefaultAsync(x =>x.Emp_Email == Emp_Email & x.Password == Password);
            if (data!=null)
            {
                var ar = mapper.Map<Employee>(data);
                return 1;
            }
            return 0;
        }

        //This method is used for Login of Manager
        public async Task<int> ManagerLoginAsync(int Man_Id, string Password)
        {
            var data = await dataAccessLayerDB.managers.FirstOrDefaultAsync(x => x.Man_Id == Man_Id & x.Password == Password);
            if (data != null)
            {
                var ar = mapper.Map<Manager>(data);
                return 1;
            }
            return 0;
        }

        //This method is used for New Employee Registration,and insert it into Employee table
        public async Task<int> EmpSignUpAsync(Employee employee)
        {
            var ar = mapper.Map<EmployeeDB>(employee);
            dataAccessLayerDB.employees.Add(ar);
            await dataAccessLayerDB.SaveChangesAsync();
            return 1;
        }

        //This method is used to get any employee details on UI using his email id 
        public async Task<Employee> MyDetailsAsync(string Emp_Email)
        {
            var ar = await dataAccessLayerDB.employees.Where(x => x.Emp_Email == Emp_Email).FirstOrDefaultAsync();
            var w = mapper.Map<Employee>(ar);
            return w;
        }

        //This will show My logged in employee's manger details
        public async Task<Manager> MyManagerAsync(int? Man_Id)
        {
            var details = await dataAccessLayerDB.managers.FirstOrDefaultAsync(x => x.Man_Id == Man_Id);
            var details_View = mapper.Map<Manager>(details);

            return details_View;

        }

        //This method is used to apply leave , and insert it into leavedetails table
        public async Task<int> InsertLeaveAsync(LeaveDetails leaveDetails)
        {
            var ar = mapper.Map<LeaveDetailsDB>(leaveDetails);
            dataAccessLayerDB.leaveDetails.Add(ar);
            await dataAccessLayerDB.SaveChangesAsync();
            return 1;
        }

        //This method is used to get previous Leaves applied by logged in employee
        public async Task<List<LeaveDetails>> MyPreviousLeaves(int Emp_Id)
        {
            var empLeaves = await dataAccessLayerDB.leaveDetails.Where(x => x.Emp_Id == Emp_Id).ToListAsync();
            var data = mapper.Map<List<LeaveDetails>>(empLeaves);
            return data;
        }

        //This method will show leaves under specific manager  
        public async Task<List<LeaveDetails>> AppliedLeaves(int Man_Id)
        {
            var empLeaves = await dataAccessLayerDB.leaveDetails.Where(x => x.Man_Id == Man_Id).ToListAsync();
            var data = mapper.Map<List<LeaveDetails>>(empLeaves);
            return data;
        }
        //(SWAGGER ONLY) this method is used to change leave status and add manager comment
        public int ManagerAction(int? id, LeaveDetails leaveDetails)
        {
            var data = dataAccessLayerDB.leaveDetails.Where(x => x.Leave_Id == id).FirstOrDefault();
            if (data != null)
            {
                data.Manager_Comment = leaveDetails.Manager_Comment;
                data.Leave_Status = leaveDetails.Leave_Status;
                dataAccessLayerDB.SaveChanges();
            }
            return 1;
        }
    }

}
