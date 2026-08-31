import { Container } from "@/components/ui/container";
import { Prose } from "@/components/ui/prose";
import type { LegalBlock, LegalDocument } from "@/types/legal";

function Block({ block }: { block: LegalBlock }) {
  if (block.kind === "p") {
    return <p>{block.text}</p>;
  }

  if (block.kind === "list") {
    return (
      <ul className="ml-5 list-disc space-y-2">
        {block.items.map((item) => (
          <li key={item.slice(0, 40)}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="-mx-1 overflow-x-auto px-1">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <caption className="sr-only">{block.caption}</caption>
        <thead>
          <tr>
            {block.head.map((cell) => (
              <th
                key={cell}
                scope="col"
                className="border-b border-kno-line pb-3 pr-6 font-semibold text-kno-primary"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) => (
                <td
                  key={cell}
                  className={
                    index === 0
                      ? "border-b border-kno-line py-3 pr-6 align-top font-medium text-kno-primary"
                      : "border-b border-kno-line py-3 pr-6 align-top text-kno-muted"
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LegalDocumentBody({ document }: { document: LegalDocument }) {
  return (
    <section className="bg-kno-canvas py-16 lg:py-[72px]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-[72px]">
          <nav
            aria-label="On this page"
            className="min-w-0 lg:sticky lg:top-[120px] lg:self-start"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.06em] text-kno-primary">
              On this page
            </h2>
            <ol className="mt-4 space-y-2">
              {document.sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="rounded-sm text-sm text-kno-muted outline-none transition-colors hover:text-kno-primary focus-visible:ring-2 focus-visible:ring-kno-primary focus-visible:ring-offset-2"
                  >
                    <span className="tabular-nums">{index + 1}.</span>{" "}
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <Prose className="min-w-0 max-w-none space-y-12">
            {document.sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="scroll-mt-[110px]"
              >
                <h2
                  id={`${section.id}-heading`}
                  className="text-h3 font-bold text-kno-primary"
                >
                  <span className="tabular-nums">{index + 1}.</span>{" "}
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.blocks.map((block, blockIndex) => (
                    <Block key={blockIndex} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </Prose>
        </div>
      </Container>
    </section>
  );
}
