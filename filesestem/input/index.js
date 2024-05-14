
// interface Stracture {
//     name: String;
//     path: String;
//     store: Boolean;
//     layout: Boolean;
//     components: string[] ; 
//     page: string[] ;
//     children: string[] | null ; 
// }
export const stucture = [
    {
        name: "folder1", // name of directory
        path: "../src/modules/home/pages",// not required but posiple will use it in future
        store: true, // is module has store
        layout: true, // is has layout (note : is true (has a layout) dynamicly will extract route file for direcctory )
        components: ["components1", "components2"], // components name for module 
        page: ["index"], // pages name 
        children: null // is has children 
    },
    {
        name: "folder2",
        path: "../src/modules/home/pages",
        store: false,
        layout: true,
        components: ["components1", "components2"],
        page: ["index"],
        children: [
            {
                name: "children1",
                path: "../src/modules/home/pages/folder2",
                store: false,
                layout: true,
                components: ["components1", "components2"],
                page: ["index"],
                children: null
            },
            {
                name: "children2",
                path: "../src/modules/home/pages/folder2",
                store: false,
                layout: true,
                components: ["components1", "components2"],
                page: ["index"],
                children: [
                    {
                        name: "children1",
                        path: "../src/modules/home/pages/folder2",
                        store: false,
                        layout: true,
                        components: ["components1", "components2"],
                        page: ["index"],
                        children: null
                    },
                    {
                        name: "children2",
                        path: "../src/modules/home/pages/folder2",
                        store: false,
                        layout: true,
                        components: ["components1", "components2"],
                        page: ["index"],
                        children: null
                    }
                ],
            }
        ],
    },
]