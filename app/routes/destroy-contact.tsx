import type { Route } from "./+types/edit-contact";

import { deleteContact } from "~/data";
import { redirect } from "react-router";

export async function action({params,}: Route.ActionArgs) {
    await deleteContact(params.contactId);
    return redirect("/");
}