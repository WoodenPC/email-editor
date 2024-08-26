import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarContentTabView } from "./sidebar-content-tab-view";
import { SidebarPropsTabView } from "./sidebar-props-tab-view";

export const EditorSidebar = () => {
  return (
    <div className="p-4">
      <Tabs defaultValue="props">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="props">Свойства</TabsTrigger>
          <TabsTrigger value="content">Контент</TabsTrigger>
        </TabsList>
        <TabsContent value="props">
          <SidebarPropsTabView />
        </TabsContent>
        <TabsContent value="content">
          <SidebarContentTabView />
        </TabsContent>
      </Tabs>
    </div>
  );
};
