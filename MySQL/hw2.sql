use man1fest;
# 1.Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
select * from client where length(FirstName) < 6;
# 2.Вибрати львівські відділення банку.
select * from department where DepartmentCity = 'lviv';
# 3.Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
select * from client where Education = 'high' order by LastName;
# 4.Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
select * from application order by idApplication desc limit 5;
# 5.Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
select * from client where LastName like '%ov' or LastName like  'ova';
# 6.Вивести клієнтів банку, які обслуговуються київськими відділеннями.
select * from client join department d on d.idDepartment = client.Department_idDepartment where d.DepartmentCity = 'kyiv';
# 7.Знайти унікальні імена клієнтів.
select distinct FirstName from client;
# 8.Вивести дані про клієнтів, які мають кредит більше ніж на 5000 гривень.
select * from client join application a on client.idClient = a.Client_idClient where Sum > 5000 and  Currency = 'Gryvnia';
# 9.Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
select count(*) from client join department d on d.idDepartment = client.Department_idDepartment where DepartmentCity is not null
union
select count(*) from client join department d2 on d2.idDepartment = client.Department_idDepartment where DepartmentCity = 'Lviv';
# 10.Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
select idClient, Client_idClient, FirstName, LastName, Sum from client join application a on client.idClient = a.Client_idClient where Sum = (select max(Sum) from application where Client_idClient = client.idClient);
# 11. Визначити кількість заявок на крдеит для кожного клієнта.
select FirstName, LastName, count(*) from client join application a on client.idClient = a.Client_idClient group by FirstName, LastName;
# 12. Визначити найбільший та найменший кредити.
select max(Sum) from application join client c on c.idClient = application.Client_idClient
union
select min(Sum) from application join client c on c.idClient = application.Client_idClient;
# 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
select count(*) from client join application a on client.idClient = a.Client_idClient where Education = 'high';
# 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.

# 15. Вивести відділення, яке видало в кредити найбільше грошей

# 16. Вивести відділення, яке видало найбільший кредит.
select DepartmentCity, Sum from department join client c on department.idDepartment = c.Department_idDepartment join application a on c.idClient = a.Client_idClient where Sum = (select max(Sum) from application);
# 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
#
# 18. Усіх клієнтів київських відділень пересилити до Києва.
#
# 19. Видалити усі кредити, які є повернені.
#
# 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
#
# 21.Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
#
# 22.Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
#
# 23.Знайти максимальний неповернений кредит.
#
# 24.Знайти клієнта, сума кредиту якого найменша
#
# 25.Знайти кредити, сума яких більша за середнє значення усіх кредитів
#
# 26. Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів
#
# 27. Місто клієнта з найбільшою кількістю кредитів