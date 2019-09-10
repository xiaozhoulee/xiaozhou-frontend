# 第九章第3节MySQL具体语句
### 语句
```sql
--DDL
create table student(id int,name varchar(20),sex char(1));  --创建表
alter table student add achievement int;  --为student表添加字段
alter table student modify sex char(2) --修改表字段类型或尺寸
alter table student drop achievement;  --删除表中的列
rename table student to person; --修改表名
alter table person character set gbk; --修改表的编码
show create table user; --查看表创建信息
alter table user change name username varchar(20); --修改字段名称
--DML
insert into user (id,name,sex) values (1,"小明","男"); --插入一条数据
insert into user values (1,"小明","男"); --简写插入
insert into user (id,name,sex) values    --批量添加
(1,"小明","男"),
(2,"小明","男"),
(3,"小明","男");
update user set name = "xiaohong",sex = "女" where id = 1; --修改数据
delete from user where id = 1; --删除数据
delete from user;  --将表中数据全部删除
--DQL
-- select 字段名 from 表明 [where -> group by -> having -> order by]
select name from user; --查询用户名称
select name,sex from user; --查询姓名和性别
select * from user; --查询所有字段，存在性能问题，开发中不建议使用*
select name,age,sal*12 from user; --sal是月薪，乘以12可以查询年薪
select name,age,sal*12 as yearsal from user; --as可以给字段起别名
select name from user where id = 10;  --查询id为10
select name from user where sal > 1000; --查询薪水大于1000
select name from user where name = '小明'; --字符串需要用引号
select name from user where id != 10; --id不等于10
select name from user where id <> 10; --同上，建议使用此符号，id不等于10
select name from user where sal >= 1000 and sal <= 5000; --薪水在1000到5000之间
select name from user where sal between 1000 and 5000; --同上，薪水在1000到5000之间
select name from user where sal is null; --薪水为null
select name from user where sal <= 1000 or sal >= 5000; --薪水小宇1000或大于5000
select name from user where name in ('Lily','lucy','xiaoming');  --只要满足一个就可以，执行效率低，尽量避免使用
select name from user where name not in ('Lily','lucy','xiaoming');  --都不是就符合条件，执行效率低，尽量避免使用
select name from user where name like 'm%'; --模糊查询，以m开头，like性能较低
select name from user where name like '%m'; --模糊查询，以m结尾
select name from user where name like '%m%'; --查詢字母中間包括m的
select name from user where name like '_m%'; --查詢第二个字母是m的，一个下划线代表一个字符
select name from user order by sal; --默认为按sal升序排列
select name from where name like 'm' order by sal; --先写条件，再写排序
select name from where name like 'm' order by sal asc; --手动指定升序，与默认相同
select name from where name like 'm' order by sal desc; --手动指定降序排列
select name from user order by name,sal; --多字段排序，先按照name排序，再按照sal排序

```

### 函数

#### 聚合函数
```sql
SELECT count(id) AS total FROM n;   # 总数
SELECT sum(age) AS all_age FROM n;   # 总和
SELECT avg(age) AS all_age FROM n;   # 平均值
SELECT max(age) AS all_age FROM n;   # 最大值
SELECT min(age) AS all_age FROM n;   # 最小值
```
#### 数学函数
```sql
SELECT abs(-5);   # 绝对值
SELECT bin(15), oct(15), hex(15);   # 二进制，八进制，十六进制
SELECT pi();   # 圆周率3.141593
SELECT ceil(5.5);   # 大于x的最小整数值6
SELECT floor(5.5);   # 小于x的最大整数值5
SELECT greatest(3,1,4,1,5,9,2,6);   # 返回集合中最大的值9
SELECT least(3,1,4,1,5,9,2,6);    # 返回集合中最小的值1
SELECT mod(5,3);    # 余数2
SELECT rand();    # 返回０到１内的随机值，每次不一样
SELECT rand(5);   # 提供一个参数(种子)使RAND()随机数生成器生成一个指定的值。
SELECT round(1415.1415);   # 四舍五入1415
SELECT round(1415.1415, 3);   # 四舍五入三位数1415.142
SELECT round(1415.1415, -1);    # 四舍五入整数位数1420
SELECT truncate(1415.1415, 3);    # 截短为3位小数1415.141
SELECT truncate(1415.1415, -1);   # 截短为-1位小数1410
SELECT sign(-5);    # 符号的值负数-1
SELECT sign(5);    # 符号的值正数1
SELECT sqrt(9);   # 平方根3
SELECT sqrt(9);   # 平方根3
```
#### 字符串函数
```sql
SELECT concat('a', 'p', 'p', 'le');   # 连接字符串-apple
SELECT concat_ws(',', 'a', 'p', 'p', 'le');   # 连接用','分割字符串-a,p,p,le
SELECT insert('chinese', 3, 2, 'IN');    # 将字符串'chinese'从3位置开始的2个字符替换为'IN'-chINese
SELECT left('chinese', 4);   # 返回字符串'chinese'左边的4个字符-chin
SELECT right('chinese', 3);   # 返回字符串'chinese'右边的3个字符-ese
SELECT substring('chinese', 3);   # 返回字符串'chinese'第三个字符之后的子字符串-inese
SELECT substring('chinese', -3);   # 返回字符串'chinese'倒数第三个字符之后的子字符串-ese
SELECT substring('chinese', 3, 2);   # 返回字符串'chinese'第三个字符之后的两个字符-in
SELECT trim(' chinese ');    # 切割字符串' chinese '两边的空字符-'chinese'
SELECT ltrim(' chinese ');    # 切割字符串' chinese '两边的空字符-'chinese '
SELECT rtrim(' chinese ');    # 切割字符串' chinese '两边的空字符-' chinese'
SELECT repeat('boy', 3);    # 重复字符'boy'三次-'boyboyboy'
SELECT reverse('chinese');    # 反向排序-'esenihc'
SELECT length('chinese');   # 返回字符串的长度-7
SELECT upper('chINese'), lower('chINese');    # 大写小写 CHINESE    chinese
SELECT ucase('chINese'), lcase('chINese');    # 大写小写 CHINESE    chinese
SELECT position('i' IN 'chinese');    # 返回'i'在'chinese'的第一个位置-3
SELECT position('e' IN 'chinese');    # 返回'i'在'chinese'的第一个位置-5
SELECT strcmp('abc', 'abd');    # 比较字符串，第一个参数小于第二个返回负数- -1
SELECT strcmp('abc', 'abb');    # 比较字符串，第一个参数大于第二个返回正数- 1
```
#### 时间函数
```sql
SELECT current_date, current_time, now();    # 2018-01-13   12:33:43    2018-01-13 12:33:43
SELECT hour(current_time), minute(current_time), second(current_time);    # 12  31   34
SELECT year(current_date), month(current_date), week(current_date);   # 2018    1   1
SELECT quarter(current_date);   # 1
SELECT monthname(current_date), dayname(current_date);   # January  Saturday
SELECT dayofweek(current_date), dayofmonth(current_date), dayofyear(current_date);    # 7   13  13
```
#### 控制流函数
```sql
SELECT if(3>2, 't', 'f'), if(3<2, 't', 'f');    # t f
SELECT ifnull(NULL, 't'), ifnull(2, 't');    # t 2
SELECT isnull(1), isnull(1/0);    # 0 1 是null返回1，不是null返回0
SELECT nullif('a', 'a'), nullif('a', 'b');    # null a 参数相同或成立返回null，不同或不成立则返回第一个参数
SELECT CASE 2
       WHEN 1 THEN 'first'
       WHEN 2 THEN 'second'
       WHEN 3 THEN 'third'
       ELSE 'other'
       END ;     # second
```
#### 系统信息函数
```sql
SELECT database();    # 当前数据库名-test
SELECT connection_id();   # 当前用户id-306
SELECT user();    # 当前用户-root@localhost
SELECT version();   # 当前mysql版本
SELECT found_rows();    # 返回上次查询的检索行数
```
#### 以下是函数的一些例子：
```sql
select lower(name) from user; --查询员工姓名，并将信命转换成小写。
select upper(name) from user; --查询员工姓名，并将信命转换成大写。
select substr(name,2,1) from user; --查询姓名，截取字符串，只显示第二个字母
select name from user where substr(name,2,1) = 'A'; --查询姓名，显示第二个字母为a的
select name,length(name) as nameLength from user; --显示姓名长度
select name,ifnull(sal,0) from user; --如果sal的值为null，name替换成0。
select name,(sal + ifnull(comm,0)) as totalSal from emp; --（comm为津贴）查询总薪水
--case..when..then..else..end 相当于if判断
--trim 去掉空格
select name from user where name = trim('   test   '); --去掉空格，一般在java中就已经判断了，所以数据库用到的情况下不多
select round(sal,1) from user; --查看薪水，四舍五入保留一位小数，
select rand(); --生成一个0-1的随机数
select sum(sal) as sumSal from user; --获取薪水的合计。
select sum(sal + ifnull(comm,0)) as totalSal from user; --获取总薪水
select avg(sal) as avgSal from user; --获取薪水的平均数
select max(sal) as maxSal from user; --获取最高薪水
select min(sal) as minSal from user; --获取最低薪水
select count(*) from user; --获取数据的总数
select count(comm) from user; --count会忽略空值，可以获取comm(补助)不为空的数量
select distinct name from user; --去掉重复的name数据
select count(distinct job) from user; --查询工作岗位的数量
select job,max(sal) as maxJob from user group by job; --根据job进行分组，找出每组的最高薪水
```
### 用户
* 增加用户
```sql
CREATE USER 'test'@'localhost' IDENTIFIED BY 'test';
INSERT INTO mysql.user(Host, User, Password) VALUES ('localhost', 'test', Password('test'));    # 在用户表中插入用户信息，直接操作User表不推荐
```
* 删除用户
```sql
DROP USER 'test'@'localhost';
DELETE FROM mysql.user WHERE User='test' AND Host='localhost';
FLUSH PRIVILEGES ;
```
* 更改用户密码
```sql
SET PASSWORD FOR 'test'@'localhost' = PASSWORD('test');
UPDATE mysql.user SET Password=Password('t') WHERE User='test' AND Host='localhost';
FLUSH PRIVILEGES ;
```
#### 用户授权
```sql
GRANT ALL PRIVILEGES ON *.* TO test@localhost IDENTIFIED BY 'test';
```
* 授予用'test'密码登陆成功的test@localhost用户操作所有数据库的所有表的所有的权限
```sql
FLUSH PRIVILEGES ;   # 刷新系统权限表,使授予权限生效
```
* 撤销用户授权
```sql
REVOKE DELETE ON *.* FROM 'test'@'localhost';   # 取消该用户的删除权限
```
### 存储过程
#### 创建存储过程
```sql
DELIMITER //    # 无参数
CREATE PROCEDURE getDates()
  BEGIN
    SELECT * FROM test ;
  END //
CREATE PROCEDURE getDates_2(IN id INT)    # in参数
  BEGIN
    SELECT * FROM test WHERE a = id;
  END //
CREATE PROCEDURE getDates_3(OUT sum INT)    # out参数
  BEGIN
    SET sum = (SELECT count(*) FROM test);
  END //
CREATE PROCEDURE getDates_4(INOUT i INT)    # inout参数
  BEGIN
    SET i = i + 1;
  END //
DELIMITER ;
```
* 删除存储过程
```sql
DROP PROCEDURE IF EXISTS getDates;
```
* 修改存储过程的特性
```sql
ALTER PROCEDURE getDates MODIFIES SQL DATA ;
```
* 修改存储过程语句（删除再重建）略
```sql
* 查看存储过程
```sql
SHOW PROCEDURE STATUS LIKE 'getDates';    # 状态
SHOW CREATE PROCEDURE getDates_3;   # 语句
* 调用存储过程
```sql
CALL getDates();
CALL getDates_2(1);
CALL getDates_3(@s);
SELECT @s;
SET @i = 1;
CALL getDates_4(@i);
SELECT @i;    # @i = 2
```

### 键
* 添加主键
```sql
ALTER TABLE n ADD PRIMARY KEY (id);
ALTER TABLE n ADD CONSTRAINT pk_n PRIMARY KEY (id);   # 主键只有一个，所以定义键名似乎也没有什么用
```
* 删除主键
```sql
ALTER TABLE n DROP PRIMARY KEY ;
```
* 添加外键
```sql
ALTER TABLE m ADD FOREIGN KEY (id) REFERENCES n(id);    # 自动生成键名m_ibfk_1
ALTER TABLE m ADD CONSTRAINT fk_id FOREIGN KEY (id) REFERENCES n(id);   # 使用定义的键名fk_id
```
* 删除外键
```sql
ALTER TABLE m DROP FOREIGN KEY `fk_id`;
```
* 修改外键
```sql
ALTER TABLE m DROP FOREIGN KEY `fk_id`, ADD CONSTRAINT fk_id2 FOREIGN KEY (id) REFERENCES n(id);    # 删除之后从新建
```
* 添加唯一键
```sql
ALTER TABLE n ADD UNIQUE (name);
ALTER TABLE n ADD UNIQUE u_name (name);
ALTER TABLE n ADD UNIQUE INDEX u_name (name);
ALTER TABLE n ADD CONSTRAINT u_name UNIQUE (name);
CREATE UNIQUE INDEX u_name ON n(name);
```
* 添加索引
```sql
ALTER TABLE n ADD INDEX (age);
ALTER TABLE n ADD INDEX i_age (age);
CREATE INDEX i_age ON n(age);
```
* 删除索引或唯一键
```sql
DROP INDEX u_name ON n;
DROP INDEX i_age ON n;
```
### 联接
* 内联接
```sql
SELECT * FROM m INNER JOIN n ON m.id = n.id;
```
* 左外联接
```sql
SELECT * FROM m LEFT JOIN n ON m.id = n.id;
```
* 右外联接
```sql
SELECT * FROM m RIGHT JOIN n ON m.id = n.id;
```
* 交叉联接
```sql
SELECT * FROM m CROSS JOIN n;   # 标准写法
SELECT * FROM m, n;
```
* 类似全连接full join的联接用法
```sql
SELECT id,name FROM m
UNION
SELECT id,name FROM n;
```