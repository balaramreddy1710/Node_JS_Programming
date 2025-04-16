function a() {
  console.log("Hi There");
}

a.print = "Yo";
console.log(a.print);

a().print = "Yo";
console.log(a().print);
