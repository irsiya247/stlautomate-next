import { redirect } from "next/navigation";
import { buildLegacyIntakeRedirect } from "../../components/legacy-intake-redirect.mjs";

export default async function IntakeRedirect({ searchParams }) {
  const query = await searchParams;
  redirect(buildLegacyIntakeRedirect(query));
}
