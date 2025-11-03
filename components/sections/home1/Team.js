import TeamOne from "@/components/common/TeamOne"
export default function Team() {
  
  return (
      <div>
          <TeamOne 
            className="team-one"
            sectionTitle="Our Professional Team"
            subTitle="Meet Our Legal Experts"
            teamData={[
                {
                name: 'Kapil Rathod',
                position: 'Principal Lawyer',
                image: '/assets/img/team/team-v1-img1.png',
                social: [
                    { url: '#', iconClass: 'icon-icon-4' },
                    { url: '#', iconClass: 'icon-icon-3' },
                    { url: '#', iconClass: 'icon-icon-2' },
                    { url: '#', iconClass: 'icon-icon-1' },
                ]
                },
                {
                name: 'Saleema Panjwani',
                position: 'Associate Lawyer',
                image: '/assets/img/team/team-v1-img2.png',
                social: [
                    { url: '#', iconClass: 'icon-icon-4' },
                    { url: '#', iconClass: 'icon-icon-3' },
                    { url: '#', iconClass: 'icon-icon-2' },
                    { url: '#', iconClass: 'icon-icon-1' },
                ]
                },
                {
                name: 'Lincy Gomez',
                position: 'Legal Assistant',
                image: '/assets/img/team/team-v1-img3.png',
                social: [
                    { url: '#', iconClass: 'icon-icon-4' },
                    { url: '#', iconClass: 'icon-icon-3' },
                    { url: '#', iconClass: 'icon-icon-2' },
                    { url: '#', iconClass: 'icon-icon-1' },
                ]
                }
            ]}
        />
      </div>
  );
}
