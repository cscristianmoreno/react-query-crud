import { authorityModelStruct } from "../models/authority.model";

export class User {
    private id!: number;
    private name!: string;
    private lastname!: string;
    private email!: string;
    private password!: string;
    private authority!: authorityModelStruct;

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

	public get getPassword(): string {
		return this.password;
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
    
	public set setPassword(value: string) {
		this.password = value;
	}

    public set setAuthority(value: authorityModelStruct) {
        this.authority = value;
    }
}