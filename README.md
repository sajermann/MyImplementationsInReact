 # @sajermann/utils

Conjunto de funções utilitárias que eu cansei de copiar e colar em todos os meus projetos. Esse projeto encontra-se em desenvolvimento,
algumas funções podem mudar, atente-se a versão.

## Base64

### b64EncodeUnicode
Convert String to Base64
```js
b64EncodeUnicode("AÁoõ!@#UÚ") // returns: QcOBb8O1IUAjVcOa
```

### b64DecodeUnicode
Convert Base64 to String
```js
b64DecodeUnicode("QcOBb8O1IUAjVcOa") // returns: AÁoõ!@#UÚ
```

## CnpjCpf

### IsValidCnpj
Verify if Cnpj is valid
```js
isValidCnpj("12345678901234") // returns: false
```

### AddCnpjMask
Add Mask in Cnpj
```js
addCnpjMask("07526557000100") // returns: "07.526.557/0001-00"
```

### RemoveCnpjMask
Remove Mask from Cnpj
```js
removeCnpjMask("07.526.557/0001-00") // returns: "07526557000100"
```

## Currency

### FormatForReal
Add mask in value for brazilian currency
```js
formatForReal(10.99) // returns: "R$ 10,99"
```

## Delay

### Delay
Simulate delay
```js
await delay(3000) // returns: simulate delay of 3 seconds
```

## Email

### IsValidEmail
Verify if email is valid
```js
isValidEmail("sajermannbruno@gmail") // returns: false
isValidEmail("sajermannbruno@gmail.com") // returns: true
```

## Random

### GenerateNumbers
Return string numbers
```js
generateNumbers(3) // returns: 269 (Random)
generateNumbers(10) // returns: 1230569830 (Random)
```

### GenerateGuid
Return string Guid
```js
generateGuid() // returns: "58ae706d-25c6-4bfd-b8d9-68c7d2356eca"
```

## formatDate

### IsLeapYear
Verify if is bissextile year
```js
isLeapYear(2020) // returns: true
isLeapYear(2021) // returns: false
```

### isValidDate
Verify if date is valid
Warning: For Javascript new Date(2022, 1, 31) is Thu Mar 03 2022 00:00:00 GMT-0300,
if you look for something more assertive try: isValidDateDeep()
```js
isValidDate(new Date(2022, 1, 1)) // returns: true
isValidDate(new Date(2022, 1, 32)) // returns: true
isValidDate(undefined as unknown as Date) // returns: false
```

### IsValidDay
Verify if day of month is valid
```js
isValidDay(32) // returns: false
isValidDay(31) // returns: true
isValidDay(null as unknown as number) // returns: false
```

### IsValidMonth
Verify if month of year is valid
```js
isValidMonth(13) // returns: false
isValidMonth(5) // returns: true
isValidMonth(null as unknown as number) // returns: false
```

### IsValidFullYear
Verify if year is valid
@min 100
@max 99999
```js
isValidFullYear(1) // returns: false
isValidFullYear(2022) // returns: true
isValidFullYear(null as unknown as number) // returns: false
```

### IsValidDateDeep
Verify if is valid date with deep
```js
isValidDateDeep({day: 31, month: 2, fullYear: 1991}) // returns: false
isValidDateDeep({day: 31, month: 5, fullYear: 1991}) // returns: true
isValidDateDeep(null as unknown as number) // returns: false
```

### StringToDate
Convert string to new Date
```js
stringToDate("31/05/1991") // returns: Fri May 31 1991 00:00:00 GMT-0300
stringToDate(null as unknown as string) // returns: Wed Dec 31 1969 21:00:01 GMT-0300
```

### StringToDateHour
Convert string to new Date with Hour
```js
stringToDateHour("31/05/1991 12:30:01") // returns: Fri May 31 1991 12:30:01 GMT-0300
stringToDateHour(null as unknown as string) // returns: Wed Dec 31 1969 21:00:01 GMT-0300
```

### FormatDateAndHour
Format Date to string friendly
```js
formatDateAndHour("2021-01-01T00:00:00Z") // returns: "01/01/2021 00:00:00"
formatDateAndHour(null as unknown as Date) // returns: ""
```

### FormatDate
Format Date to string friendly
```js
formatDate("2021-01-01T00:00:00Z") // returns: "01/01/2021"
formatDate(null as unknown as Date) // returns: ""
```

### FormatHour
Format Hour to string friendly
```js
formatHour("2021-01-01T15:00:00Z") // returns: "15:00:00"
formatHour(null as unknown as Date) // returns: ""
```

### AddDays
Add days to Date
```js
addDays(new Date("2021-01-01T15:00:00Z"), 5) // returns: Wed Jan 06 2021 12:00:00 GMT-0300
addDays(null as unknown as Date, 5) // returns: Wed Dec 31 1969 21:00:01 GMT-0300
```

### FinalOfDay
Returns Day With Hour 23:59:59
@example
```js
finalOfDay(new Date("2021-01-01T15:00:00Z")) // returns: Fri Jan 01 2021 20:59:59 GMT-0300
finalOfDay(null as unknown as Date, 5) // returns: Wed Dec 31 1969 21:00:01 GMT-0300
```

