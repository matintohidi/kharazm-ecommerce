import { Tab } from "@/components/types/tab.type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductTabsProps {
  tabs: Tab[];
}

const ProductTabs = ({ tabs }: ProductTabsProps) => {
  return (
    <Tabs defaultValue={tabs[0].value}>
      <TabsList
        className="w-full lg:flex lg:justify-start border-b border-border grid grid-cols-2"
        dir="rtl"
      >
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="relative h-full data-[state=active]:after:block after:hidden after:absolute after:bottom-0 after:bg-primary after:rounded-tl-sm after:rounded-tr-sm after:h-1 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-16px)] after:content-['']"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-4">
          <h1 className="text-accent-foreground font-light text-sm md:text-base">
            {tab.content}
          </h1>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ProductTabs;
