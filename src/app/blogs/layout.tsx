import { Container } from "@mui/material";
import dirTree from "directory-tree";
import Link from "next/link";
import { ReactNode } from "react";
import { tree } from "../lib";

function Navbar({ tree }: { tree: dirTree.DirectoryTree<Record<string, any>> }): ReactNode {
  if (!tree) {
    return null;
  }
  return (
    <ul>
      {tree.children?.map((item, key) => (
        <li key={key}>
          {item.children?.length ? (
            <>
              <Link className="text-inherit" href={"/blogs/" + item.path.split("blogs")[1]}>
                <p style={{ whiteSpace: 'nowrap' }}>
                  {item.name}
                </p>
              </Link>
              <Navbar tree={item} />
            </>
          ) : (
            <Link className="text-inherit w-full" href={"/blogs/" + item.path.split("blogs")[1]}>
              <p style={{ whiteSpace: 'nowrap' }}>
                {item.name}
              </p>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function ({ children }: { children: React.ReactNode }): ReactNode {
  return <Container className="flex gap-4 p-4">
    <div className="hidden md:block">
      <Navbar tree={tree} />
    </div>
    <div>
      {children}
    </div>
  </Container>
}