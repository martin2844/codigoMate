---
title: "Javascript Arrays"
date: "2019-06-14"
featuredImage: "../../images/thumbs/js.png"
type: "JS"
abs: "En este tutorial vas a poder ver en detalle 8 metodos muy utiles para arrays, Filter, map, some, includes, every, forEach, reduce, find. Esta es la primera parte, en la segunda parte cubriremos más metodos aplicables a Arrays, que resultan utiles en muchos casos diversos"
tag: "javascript"
---


En este tutorial van a poder ver  8 metodos aplicables a arrays en javascript que nos van ayudar a trabajar mejor con ellos.
Filter, map, some, includes, every, forEach, reduce, find

### Parte 1

1. Filter

```javascript

const miembros = [
        {nombre: "Juan", edad: 20},
        {nombre: "Raul", edad: 22},
        {nombre: "Ignacio", edad: 16},
        {nombre: "Felipe", edad: 14},
        {nombre: "Roberto", edad: 17},
        {nombre: "Fausto", edad: 19},
]

const menores = miembros.filter((miembro) => {
    return miembro.edad < 18
})

console.log(menores);



```
va devolver esto =

```javascript


(3) [{…}, {…}, {…}]
0: {nombre: "Ignacio", edad: 16}
1: {nombre: "Felipe", edad: 14}
2: {nombre: "Roberto", edad: 17}
length: 3
__proto__: Array(0)
```

___

2. Map

Map va a crear un nuevo array con el resultado de la función por cada elemento del array.
Sirve en el ejemplo anterior, si queremos un array con solo las edades

```javascript

const miembros = [
        {nombre: "Juan", edad: 20},
        {nombre: "Raul", edad: 22},
        {nombre: "Ignacio", edad: 16},
        {nombre: "Felipe", edad: 14},
        {nombre: "Roberto", edad: 17},
        {nombre: "Fausto", edad: 19},
]

const soloNombres = miembros.map((miembro) => {
    return miembro.nombre
})

console.log(soloNombres);



```

va devolver esto =

```javascript



(6) ["Juan", "Raul", "Ignacio", "Felipe", "Roberto", "Fausto"]
0: "Juan"
1: "Raul"
2: "Ignacio"
3: "Felipe"
4: "Roberto"
5: "Fausto"
length: 6
__proto__: Array(0)
```

___










[![Mira el video](https://i.ytimg.com/vi/IFzWJ_Gtr4A/hqdefault.jpg)](https://www.youtube.com/watch?v=IFzWJ_Gtr4A&t)