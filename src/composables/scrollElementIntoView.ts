import type { TElement } from "~/constants/typeInference";

function useScrollElementIntoView(element: TElement): void {
  if (!element) return;
  return (element as HTMLHeadingElement).scrollIntoView({ behavior: "smooth" });
}

export default useScrollElementIntoView;
