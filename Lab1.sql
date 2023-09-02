select * from employees;
select  * from employees where  DEPARTMENT_ID=40;
select LAST_NAME,SALARY from employees where JOB_ID = 'IT_PROG';
select  LAST_NAME, EMAIL from employees where HIRE_DATE = '07-JUN-02';
--4. Find the employees who joined after 1st June 2006 and whose department id > 60
select * from employees where HIRE_DATE > =  '01-JUN-06' and DEPARTMENT_ID>60;
--5. Find the employees who joined after 1st June 2007 and before 1st December 2007 (using
--BETWEEN function)
select * from employees where HIRE_DATE between '01-JUN-07' and '01-DEC-07';
--6. Display the list of employees with SALARY less than $5,000
select * from employees where SALARY < 5000;
--7. How many employees have salary less than $5,000
select count(*) from employees where SALARY < 5000;
--8. Find all the employees where salary is greater than $10000 and less than $15000
select * from employees where SALARY < 15000 AND SALARY > 10000;
--9. Display list of all employees where MANAGER_ID is 100 or 101 or 201 using OR function
select * from employees where MANAGER_ID = 100 OR  MANAGER_ID = 101 OR MANAGER_ID = 201;
--10. Display list of all employees where MANAGER_ID is 100 or 101 or 201 using IN function
select * from employees where MANAGER_ID in (100,101,201);
--11. Display list of all employees where JOB_ID is other than IT_PROG, SA_REP and
--FI_ACCOUNT
select * from employees where NOT JOB_ID='IT_PROG' AND NOT JOB_ID='SA_REP' and not JOB_ID='FI_ACCOUNT';
--12. Find employees whose last name starts with letter 'K'
select * from employees where LAST_NAME like 'K%';
--13. Find emloyees whose first name ends with letter 'R'
select * from employees where FIRST_NAME like '%R';
--14. Display LAST_NAME , EMAIL_ID and PHONE_NUMBER of all employees whose
--FIRST_NAME starts with S or J.
select LAST_NAME , EMAIL, PHONE_NUMBER from employees where FIRST_NAME like 'S%' OR FIRST_NAME like 'J%';
--15. Display list of employees where the second character in FIRST_NAME is �o�.
select * from employees where FIRST_NAME like '_o%';
--16. Display the list of all employees who are not part of any department
select * from employees where DEPARTMENT_ID is null;
--17. How many employees are there who do not have a manager?
select count(*) from employees where MANAGER_ID is null;
--18. Display list of all employees which are not getting any comission.
select * from employees where COMMISSION_PCT is null;
--19. Display the list of employees whose JOB_ID is SA_REP and SALARY is more than $10,000
select * from employees where JOB_ID = 'SA_REP' and SALARY > 10000;
--20. Display the list of employees whose JOB_ID is SA_REP or SALARY less than $10,000
select * from employees where JOB_ID = 'SA_REP' or SALARY < 10000;
--21. Display list of employees who have JOB_ID=�SA_REP� OR ( JOB_ID=�AD_PRES� AND
--SALARY> $15,000).
select * from employees where JOB_ID = 'SA_REP' or ( JOB_ID = 'AD_PRES' and SALARY> 15000);
--22. Display list of employees who have (JOB_ID=�SA_REP� OR JOB_ID=�AD_PRES� ) AND
--SALAY >$15,000.
select * from employees where (JOB_ID = 'SA_REP' or JOB_ID = 'AD_PRES') and SALARY> 15000;
--23. Find all the employees ordered by email in descending order
select * from employees order by EMAIL desc;
--24. Display the list of all employee sorted in ascending order by EMPLOYEE_ID
select * from employees order by EMPLOYEE_ID asc;
--25. Display list of all employee sorted in DESC order by EMPLOYEE_ID
select * from employees order by EMPLOYEE_ID desc;
--26. Display JOB_ID , FIRST_NAME , and HIRE_DATE sorted by JOB_ID (DESC) then
--FIRST_NAME(ASC)
select JOB_ID,FIRST_NAME,HIRE_DATE from employees order by JOB_ID desc, FIRST_NAME asc;
--27. Display list of employees sorted by sixth column
select * from employees order by 6;

--
--
--
--
--
