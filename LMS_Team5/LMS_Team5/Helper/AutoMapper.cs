using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using LMS_Team5.Model;
using System.Threading.Tasks;

namespace LMS_Team5.Helper
{
    public class AutoMapper:Profile
    {
        public AutoMapper()
        {
            CreateMap<Employee, EmployeeDB>().ReverseMap();
            CreateMap<Manager, ManagerDB>().ReverseMap();
            CreateMap<LeaveDetails, LeaveDetailsDB>().ReverseMap();
            
          
            
        }
    }
}
