

export class Usuario {

    private nome: String;
    private email: String;

    public getNome(): String {
        return this.nome;
    }
    public setNome(nome: String): void {
        this.nome = nome;
    }

    public getEmail(): String {
        return this.email;
    }
    public setEmail(email: String): void {
        this.email = email;
    }

}