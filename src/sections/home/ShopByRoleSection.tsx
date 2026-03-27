// import Container from "@/components/common/Container";
// import SectionHeading from "@/components/common/SectionHeading";
// import RoleCard from "@/components/cards/RoleCard";

// const roles = ["Bride", "Bride’s Mom", "Bridesmaids", "Groom"];

// export default function ShopByRoleSection() {
//   return (
//     <section className="bg-white py-8 md:py-12">
//       <Container>
//         <SectionHeading title="Shop By Role" className="mb-8" />

//         <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
//           {roles.map((role) => (
//             <RoleCard key={role} title={role} />
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }


















import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import RoleCard from "@/components/cards/RoleCard";
import { Role } from "@/data/roles";

type Props = {
  roles?: Role[];
};

export default function ShopByRoleSection({ roles = [] }: Props) {
  return (
    <section className="bg-white py-8 md:py-12">
      <Container>
        <SectionHeading title="Shop By Role" className="mb-8" />

        {roles.length === 0 ? (
          <div className="text-center text-sm text-[#777]">
            No roles available
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {roles.map((role) => (
              <RoleCard
                key={role.id}
                title={role.title}
                image={role.image}
                slug={role.slug}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}