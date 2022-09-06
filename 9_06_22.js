/* write your SQL query below */

SELECT ReportsTo, COUNT(ReportsTo) as 'Members', ROUND(AVG(Age),0) as 'Average Age' FROM maintable_KYZAI
WHERE ReportsTo is not null
Group By ReportsTo
ORDER By ReportsTo