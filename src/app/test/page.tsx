import AccordionButtonList from "@/components/AccordionButtonList";

export default function Page() {
  return (
    <AccordionButtonList
      data={[
        { label: "test", items: [{ label: "test", href: "#" }] },
        { label: "test2", items: [{ label: "test2", href: "#" }] },
      ]}
    />
  );
}
