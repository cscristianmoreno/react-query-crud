import { authorityModelStruct } from "../models/authority.model";

export class UserDTO {
    private id!: number;
    private name!: string;
    private lastname!: string;
    private email!: string;
    private authority!: authorityModelStruct;

    constructor(result: UserDTO) {
        this.setId = result.id;
        this.setName = result.name;
        this.setLastname = result.lastname;
        this.setEmail = result.email;
        this.setAuthority = result.authority;
    }

    public get getId(): number {
        return this.id;
    }

    public get getName(): string {
        return this.name;
    }

    public get getLastname(): string {
        return this.lastname;
    }

    public get getEmail(): string {
        return this.email;
    }

    public get getAuthority(): authorityModelStruct {
        return this.authority;
    }

    public set setId(value: number) {
        this.id = value;
    }

    public set setName(value: string) {
        this.name = value;
    }

    public set setLastname(value: string) {
        this.lastname = value;
    }

    public set setEmail(value: string) {
        this.email = value;
    }

    public set setAuthority(value: authorityModelStruct) {
        this.authority = value;
    }
}