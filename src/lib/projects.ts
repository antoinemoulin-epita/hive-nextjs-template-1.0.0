import fs from 'fs/promises';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';

import {
  Project,
  ProjectCategory,
  ProjectFrontmatter,
} from '@/lib/types';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

/**
 * Get all project slugs
 */
export async function getProjectSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(projectsDirectory);
    return files.filter((file) => file.endsWith('.mdx'));
  } catch (error) {
    console.error('Error reading projects directory:', error);
    return [];
  }
}

/**
 * Get project by slug
 */
export async function getProjectBySlug(
  slug: string,
): Promise<Project | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = await fs.readFile(fullPath, 'utf8');

    return {
      slug,
      content: fileContents,
      frontmatter: {} as ProjectFrontmatter,
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

/**
 * Get all projects with their frontmatter
 */
export async function getAllProjects(): Promise<ProjectFrontmatter[]> {
  try {
    const files = await fs.readdir(projectsDirectory);
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

    const projects = await Promise.all(
      mdxFiles.map(async (file) => {
        const fullPath = path.join(projectsDirectory, file);
        const fileContents = await fs.readFile(fullPath, 'utf8');
        const { frontmatter } = await compileMDX<ProjectFrontmatter>({
          source: fileContents,
          options: { parseFrontmatter: true },
        });

        return frontmatter;
      }),
    );

    return projects.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  } catch (error) {
    console.error('Error reading all projects:', error);
    return [];
  }
}

/**
 * Get projects filtered by category
 */
export async function getProjectsByCategory(
  category: ProjectCategory,
): Promise<ProjectFrontmatter[]> {
  const allProjects = await getAllProjects();
  return allProjects.filter((project) => project.category === category);
}

/**
 * Get projects by slugs in specified order
 */
export async function getProjectsBySlugs(
  slugs: string[],
): Promise<ProjectFrontmatter[]> {
  const allProjects = await getAllProjects();
  const projectMap = new Map(allProjects.map((p) => [p.slug, p]));

  return slugs
    .map((slug) => projectMap.get(slug))
    .filter((project): project is ProjectFrontmatter => project !== undefined);
}
