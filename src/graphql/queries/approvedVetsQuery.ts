export const approvedVetsQuery = `
query ApprovedVets($page: Int, $limit: Int) {
  approvedVets(input: { page: $page, limit: $limit }) {
    message
    data {
      items {
        full_name
        specialization
        qualification
        years_experience
        languages
        profile_image_url
      }
      pagination {
        total
        page
        limit
        totalPages
      }
    }
  }
}
`;
