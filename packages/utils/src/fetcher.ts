// eslint-disable-next-line no-undef
interface IInitRequest extends RequestInit {
  cache: string;
}
export async function fetcher<JSON>(
  input: string | URL | Request,
  init?: IInitRequest
): Promise<JSON> {
  const response = await fetch(input, {
    ...init,
    cache: "no-store",
  } as IInitRequest);

  return (await response.json()) as JSON;
}
