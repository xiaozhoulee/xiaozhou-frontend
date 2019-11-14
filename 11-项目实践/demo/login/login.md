### 登录

#### 登录

###### 接口功能
> 登录系统

###### HTTP请求方式
> post

###### URL
> /login

###### 支持格式
> JSON

###### 请求参数
|请求字段|字段类型|说明|
|-|-|-|
|username|string|用户名|
|password|string|密码|

###### 返回参数
|返回字段|字段类型|说明|
|-|-|-|
|code|int|返回结果状态 20000 和 30000 |
|data|string|返回结果状态 token或者"密码错误！""用户不存在"|

###### 接口实例
> [http://127.0.0.1:7001/getstudent](http://127.0.0.1:7001/getstudent)

```
    "code": 20000,
    "data": [
        {
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ…Y0OX0.SP2GOrU0Vq1xNiQO3guqAtQndH5DwYD1CqZP_2VZWD0"
        }
```