import { promises as fs} from "fs"
import { NextResponse } from "next/server";

export async function GET(){

    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    const imagens = JSON.parse(file);

    return NextResponse.json(imagens);
}