using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMS_Team5.Model;

namespace LMS_Team5.Repository
{
   public interface IEmployeeRepo
    {
        Task<List<Employee>> GetEmployeesAsync();  //upto swagger only
        Task<Employee> GetEmpByIdAsync(int id);    //upto swagger only
        Task DeleteEmpAsync(int? id);  //upto swagger only
        Task UpdateEmpAsync(int? id, Employee employee);  //upto swagger only
        Task<int> EmpSignUpAsync(Employee employee);  //Has UI
        Task<int> LoginAsync(string Emp_Email, string Password);  //Has UI
        Task<int> ManagerLoginAsync(int Man_Id, string Password);  //Has UI
        Task<Employee> MyDetailsAsync(string Emp_Email); //Has UI
        Task<Manager> MyManagerAsync(int? Man_Id); //Has UI
        Task<List<LeaveDetails>> MyPreviousLeaves(int Emp_Id); //Has UI
        Task<List<LeaveDetails>> AppliedLeaves(int Man_Id); //Has UI
        Task<int> InsertLeaveAsync(LeaveDetails leaveDetails); //Has UI 
        int ManagerAction(int? id, LeaveDetails leaveDetails); //upto swagger only 

    }
}
