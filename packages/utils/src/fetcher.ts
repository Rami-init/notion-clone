/* eslint-disable no-undef */
// eslint-disable-next-line no-undef

export async function fetcher<JSON>(
  input: string | URL | Request,
  init?: RequestInit
): Promise<JSON> {
  const response = await fetch(input, {
    ...init,
    cache: "no-store",
  } as RequestInit);

  return (await response.json()) as JSON;
}
