export default function Footer() {
    return (
        <footer className="border-t border-black/8 py-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <div className="text-2xl font-bold tracking-tight mb-2">ARDENTIX</div>
                        <p className="text-sm text-text-secondary">
                            Building scalable software for modern teams.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 text-sm">
                        <a
                            href="https://ardentix.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-text-secondary transition-colors"
                        >
                            Website
                        </a>
                        <a
                            href="mailto:contact@ardentix.tech"
                            className="hover:text-text-secondary transition-colors"
                        >
                            Email
                        </a>
                        <a
                            href="https://www.linkedin.com/company/ardentix-tech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-text-secondary transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-black/8 text-sm text-text-secondary text-center md:text-left">
                    © {new Date().getFullYear()} Ardentix. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
