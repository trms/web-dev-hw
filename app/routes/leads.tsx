import { type ActionArgs, json } from "@remix-run/node";
import { redirect } from "react-router";

interface Lead {
    name: string;
    email: string;
    averageProgramsPerMonth: number;
    averageLengthOfProgramsInHours: number;
    needsTranslations: boolean;
}

export async function action( { request }: ActionArgs) {

    try {
        const requestJson = request.clone();
        const jsonData = await requestJson.json();
        return await handleJsonBody(jsonData);
    } catch {
        // Nothing todo here. Just try form data next.
    }

    try {
        const requestFormData = request.clone();
        const formData = await requestFormData.formData();
        return await handleFormData(formData);
    } catch {
        // Nothing todo here. We'll error before
    }

    throw json({ message: "Unsupported content type. Supported values are application/json and application/x-www-form-urlencoded."}, {status: 401});
}

async function handleJsonBody(jsonData: any) {
    const lead: Lead = {
        name: jsonData.name,
        email: jsonData.email,
        averageProgramsPerMonth: jsonData.averageProgramsPerMonth,
        averageLengthOfProgramsInHours: jsonData.averageLengthOfProgramsInHours,
        needsTranslations: jsonData.needsTranslations
    };
    await saveLead(lead);
    return json({json: 'ok', lead})
}

async function handleFormData(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const averageProgramsPerMonth = Number(formData.get('averageProgramsPerMonth')) ?? 0;
    const averageLengthOfProgramsInHours = Number(formData.get('averageLengthOfProgramsInHours')) ?? 0;
    const needsTranslations = Boolean(formData.get('needsTranslations'))
    const lead: Lead = {
        name,
        email,
        averageProgramsPerMonth,
        averageLengthOfProgramsInHours,
        needsTranslations
    };
    await saveLead(lead);
    const yearlyCaptionMinsCost = averageProgramsPerMonth * averageLengthOfProgramsInHours * 60
    return json({json: 'ok', lead, yearlyCaptionMinsCost})

}

async function saveLead(lead: Lead) {
    console.log(lead);
}
