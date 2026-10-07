export enum TipoCafe {
  Origen = 'Café de Origen',
  Blend = 'Blend',
}

export class Cafe {
  public constructor(
    public id: number,
    public nombre: string,
    public tipo: string,
    public region: string,
    public sabor: string,
    public altura: number,
    public imagen: string,
  ) {}
}
