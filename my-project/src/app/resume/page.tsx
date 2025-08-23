import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Link from "next/link";


export default function ResumeWeb() {
  return (
    <div className="max-w-3xl mt-20 mx-auto py-12 px-4">
      {/* Header */}
      <Card className="mb-8 bg-[#0a0a0a] border-none shadow-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Sanchez Barry</CardTitle>
          <div className="mt-2 text-neutral-600 dark:text-neutral-400">
            Software Engineer
          </div>
                    <div className="mt-2 text-neutral-600 dark:text-neutral-400">
            Singaporean citizen, 33, currently working as Frontend Developer with InvestCloud with a Masters degree from NTU
          </div>
        </CardHeader>
        <CardContent>
          {/* <div className="flex flex-wrap gap-2 mt-2">
            <Badge>Frontend</Badge>
            <Badge>Backend</Badge>
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Next.js</Badge>
          </div> */}
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card className="mb-8 bg-[#0a0a0a] border-none shadow-sm">
        <CardHeader>
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {/* <button className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
  WhatsApp
</button> */}
       <Link className="pr-3 pt-3" href="https://www.linkedin.com/in/sanchez-barry/" rel="noopener noreferrer" target="_blank">
            <button className="px-12 py-4 rounded-full bg-[#1e40d7] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#2030bd] transition-colors duration-200">
  LinkedIn
</button>
</Link>

<Link className="pr-3 pt-3" href="https://github.com/sanchezbarry" rel="noopener noreferrer" target="_blank">
            <button className="px-12 py-4 rounded-full bg-[#535353] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#636363] transition-colors duration-200">
  GitHub
</button>
</Link >

<Link className="pr-3 pt-3" href="mailto:sanchezbarry@gmail.com" rel="noopener noreferrer" target="_blank">
            <button className="px-12 py-4 rounded-full bg-[#242424] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#464646] transition-colors duration-200">
  Email
</button>
</Link>
            {/* <div>Email: <a href="sanchezbarry@gmail.com" className="underline">sanchezbarry@gmail.com</a></div>
            <div>LinkedIn: <a href="https://www.linkedin.com/in/sanchez-barry/" className="underline">https://www.linkedin.com/in/sanchez-barry/</a></div>
            <div>GitHub: <a href="https://github.com/sanchezbarry" className="underline">https://github.com/sanchezbarry</a></div> */}
          </div>
        </CardContent>
      </Card>

        <Card className="mb-8 bg-[#0a0a0a] border-none shadow-sm">
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Highlights</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Frontend Developer</TableCell>
                <TableCell>InvestCloud</TableCell>
                <TableCell>2023 &ndash; Present</TableCell>
                <TableCell>
                  <ul className="list-disc ml-4">
                    <li>Developed scalable web applications</li>
                    <li>Worked in Agile environments, managing tasks with JIRA to ensure timely project delivery.</li>
                    <li>Modernized digital platforms for financial institutions, ensuring compliance and exceptional user experience</li>
                    <li>Collaborated with Solution Architects, Backend and Dev-Ops teams to come up with solutions and align deliverables within project timelines.</li>
                  </ul>
                </TableCell>
              </TableRow>
              {/* <TableRow>
                <TableCell>Frontend Developer</TableCell>
                <TableCell>XYZ Ltd</TableCell>
                <TableCell>2020 &ndash; 2022</TableCell>
                <TableCell>
                  <ul className="list-disc ml-4">
                    <li>Built interactive dashboards with React and D3.js.</li>
                    <li>Collaborated with designers to deliver pixel-perfect UIs.</li>
                  </ul>
                </TableCell>
              </TableRow> */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Education Table */}
      <Card className="mb-8 bg-[#0a0a0a] border-none shadow-sm">
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Degree</TableHead>
                <TableHead>Institution</TableHead>
                <TableHead>Period</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Software Engineering Immersive</TableCell>
                <TableCell>General Assembly</TableCell>
                <TableCell>2022</TableCell>
              </TableRow>

                            <TableRow>
                <TableCell>Masters in Mass Communication GPA: 4/5</TableCell>
                <TableCell>Nanyang Technological University</TableCell>
                <TableCell>2019 &ndash; 2021</TableCell>
              </TableRow>

                            <TableRow>
                <TableCell>Bachelor of Arts in  Communication GPA: 3.68/4 (MagnaCum Laude)</TableCell>
                <TableCell>University at Buffalo</TableCell>
                <TableCell>2015 &ndash; 2017</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="mb-8 bg-[#0a0a0a] border-none shadow-sm">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React.js</Badge>
            <Badge>Next.js</Badge>
            <Badge>Node.js</Badge>
            <Badge>SQL</Badge>
            <Badge>HTML/CSS</Badge>
            <Badge>CI/CD</Badge>
          </div>
        </CardContent>
      </Card>

      {/* <HoveredLink href="/resume.pdf" rel="noopener noreferrer" target="_blank">Resume</HoveredLink> */}

         <div className="flex justify-center mt-8">
        <Link href="/resume.pdf" rel="noopener noreferrer" target="_blank">
          <button className="mr-3 shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
            Download Resume
          </button>
        </Link>
      </div>
    </div>
  );
}