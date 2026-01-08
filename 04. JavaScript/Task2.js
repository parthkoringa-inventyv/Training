let n = 5, i, j;
for(i=1 ; i<=n ; i++)
{
    for(j=1 ; j<=n ; j++)
        process.stdout.write(( (i < j) ? ((i <= n-j) ? ((i <= n-i) ? i : n-i+1) : ((n-j <= n-i) ? n-j+1 : n-i+1)) : ((j <= n-j) ? ((j <= n-i) ? j : n-i+1) : ((n-j <= n-i) ? n-j+1 : n-i+1)) ) + ' ');
    process.stdout.write("\n");
}