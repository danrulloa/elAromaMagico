export class Cafe {
   public constructor(
    public id: string,
    public nombre: string,
    public tipo: string,
    public region: string,
   ){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.region = region;
   }
}
