// import Container from "@/components/common/Container";
// import SectionHeading from "@/components/common/SectionHeading";
// import StoryPanel from "@/components/cards/StoryPanel";

// export default function FashionStoriesSection() {
//   return (
//     <section className="bg-[#faf7f4] py-14 md:py-20">
//       <Container>
//         <SectionHeading title="Fashion Stories" className="mb-10 md:mb-12" />

//         <div className="space-y-6">
//           <div className="grid gap-6 md:grid-cols-2">
//             <StoryPanel
//               title="Wedding Elegance"
//               subtitle="Fashion Story"
//               className="min-h-[420px]"
//             />
//             <StoryPanel
//               title="Festive Occasionwear"
//               subtitle="Fashion Story"
//               className="min-h-[420px]"
//             />
//           </div>

//           <div className="grid gap-6 md:grid-cols-3">
//             <StoryPanel
//               title="Modern Traditional"
//               subtitle="Fashion Story"
//               className="min-h-[360px]"
//             />
//             <StoryPanel
//               title="Statement Looks"
//               subtitle="Fashion Story"
//               className="min-h-[360px]"
//             />
//             <StoryPanel
//               title="Seasonal Edit"
//               subtitle="Fashion Story"
//               className="min-h-[360px]"
//             />
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }















import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import StoryPanel from "@/components/cards/StoryPanel";
import { stories } from "@/data/stories";

export default function FashionStoriesSection() {
  return (
    <section className="bg-[#faf7f4] py-14 md:py-20">
      <Container>
        <SectionHeading title="Fashion Stories" className="mb-10 md:mb-12" />

        <div className="space-y-6">
          {/* LARGE */}
          <div className="grid gap-6 md:grid-cols-2">
            {stories
              .filter((s) => s.size === "large")
              .map((story) => (
                <StoryPanel
                  key={story.title}
                  {...story}
                  className="min-h-[560px]"
                />
              ))}
          </div>

          {/* SMALL */}
          <div className="grid gap-6 md:grid-cols-3">
            {stories
              .filter((s) => s.size === "small")
              .map((story) => (
                <StoryPanel
                  key={story.title}
                  {...story}
                  className="min-h-[420px]"
                />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}