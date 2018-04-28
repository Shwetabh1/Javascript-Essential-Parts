*Why null>=0 equals `true`?*

Consider the following test cases and their outputs

`null == 0`
>false
`null > 0`
>false
`null + 1 === 1`
>true
`null > 0 || null == 0` 
>false

`null` in javascript is treated as an object and when comapring it undergoes something called as type coercion.
When compared against numbers it is coerced to numbers.
When compared against undefined it is coerced to undefined.
Thus the above behaviour is exhibited.


